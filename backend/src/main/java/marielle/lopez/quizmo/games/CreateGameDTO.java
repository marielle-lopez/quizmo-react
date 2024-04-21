package marielle.lopez.quizmo.games;

import java.util.List;

import jakarta.validation.constraints.NotNull;

public class CreateGameDTO {
	@NotNull
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
	
	public String[] getQuestions() {
		return this.questions;
	};
	
	public String[] getSubmittedAnswers() {
		return this.submittedAnswers;
	};
	
	public String[] getCorrectAnswers() {
		return this.correctAnswers;
	};
	
	public List<String[]> getIncorrectAnswers() {
		return this.incorrectAnswers;
	};
}
