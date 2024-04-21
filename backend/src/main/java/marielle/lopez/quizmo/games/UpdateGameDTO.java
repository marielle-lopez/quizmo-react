package marielle.lopez.quizmo.games;

import java.util.List;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public class UpdateGameDTO {
	@Min(0)
	private int score;
	
	@NotNull
	private String[] questions;
	
	@NotNull
	private String[] submittedAnswers;
	
	@NotNull
	private String[] correctAnswers;
	
	@NotNull
	private List<String[]> incorrectAnswers;
	
	public int getScore() {
		return this.score;
	};
	
	public void setScore(int score) {
		this.score = score;
	};
	
	public String[] getQuestions() {
		return this.questions;
	};
	
	public void setQuestions(String[] questions) {
		this.questions = questions;
	};
	
	public String[] getSubmittedAnswers() {
		return this.submittedAnswers;
	};
	
	public void setSubmittedAnswers(String[] submittedAnswers) {
		this.submittedAnswers = submittedAnswers;
	};
	
	public String[] getCorrectAnswers() {
		return this.correctAnswers;
	};
	
	public void setCorrectAnswers(String[] correctAnswers) {
		this.correctAnswers = correctAnswers;
	};
	
	public List<String[]> getIncorrectAnswers() {
		return this.incorrectAnswers;
	};
	
	public void setIncorrectAnswers(List<String[]> incorrectAnswers) {
		this.incorrectAnswers = incorrectAnswers;
	};
}
