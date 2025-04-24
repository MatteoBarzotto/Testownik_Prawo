
import tkinter as tk
import json
import random
import os

QUESTIONS_FILE = "data/questions.json"
PROGRESS_FILE = "data/progress.json"

class TestownikApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Testownik – Prawo nowych technologii")
        self.root.attributes("-fullscreen", True)
        self.root.bind("<Escape>", lambda e: self.root.destroy())

        self.load_questions()
        self.load_progress()
        self.build_ui()
        self.next_question()

    def load_questions(self):
        with open(QUESTIONS_FILE, "r", encoding="utf-8") as f:
            self.questions = json.load(f)

    def load_progress(self):
        if os.path.exists(PROGRESS_FILE):
            with open(PROGRESS_FILE, "r", encoding="utf-8") as f:
                self.progress = json.load(f)
        else:
            self.progress = {str(i): 8 for i in range(len(self.questions))}
            self.save_progress()

    def save_progress(self):
        with open(PROGRESS_FILE, "w", encoding="utf-8") as f:
            json.dump(self.progress, f, indent=4)

    def build_ui(self):
        self.label_question = tk.Label(self.root, text="", wraplength=1800, font=("Arial", 36), justify="left")
        self.label_question.pack(pady=50)

        self.var = tk.IntVar()
        self.options = []
        for i in range(4):
            rb = tk.Radiobutton(self.root, text="", variable=self.var, value=i, font=("Arial", 32),
                                anchor="w", justify="left", wraplength=1800, padx=20)
            rb.pack(fill="x", padx=60, anchor="w", pady=10)
            self.options.append(rb)

        self.btn_check = tk.Button(self.root, text="Sprawdź", font=("Arial", 28), command=self.check_answer)
        self.btn_check.pack(pady=30)

        self.label_feedback = tk.Label(self.root, text="", font=("Arial", 26, "italic"))
        self.label_feedback.pack(pady=20)

    def next_question(self):
        if all(v == 0 for v in self.progress.values()):
            self.label_question.config(text="🎉 Ukończono naukę! Wszystkie pytania mają licznik 0.")
            for rb in self.options:
                rb.pack_forget()
            self.btn_check.config(state="disabled")
            self.label_feedback.config(text="")
            return

        weights = [self.progress[str(i)] for i in range(len(self.questions))]
        self.current_index = random.choices(range(len(self.questions)), weights=weights)[0]
        self.current_question = self.questions[self.current_index]

        self.label_question.config(text=self.current_question["question"])
        self.var.set(-1)
        for i, option in enumerate(self.current_question["options"]):
            self.options[i].config(text=f"{chr(65+i)}. {option}")
        self.label_feedback.config(text="")

    def check_answer(self):
        selected = self.var.get()
        if selected == -1:
            self.label_feedback.config(text="Wybierz odpowiedź.")
            return

        correct = self.current_question["answer"]
        idx = str(self.current_index)

        if selected == correct:
            self.label_feedback.config(text="✅ Dobrze!", fg="green")
            self.progress[idx] = max(0, self.progress[idx] - 1)
        else:
            self.label_feedback.config(text=f"❌ Błąd! Poprawna: {chr(65+correct)}", fg="red")
            self.progress[idx] += 1

        self.save_progress()
        self.root.after(1500, self.next_question)

if __name__ == "__main__":
    root = tk.Tk()
    app = TestownikApp(root)
    root.mainloop()
