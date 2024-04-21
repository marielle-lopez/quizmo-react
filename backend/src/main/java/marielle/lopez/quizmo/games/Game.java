package marielle.lopez.quizmo.games;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import marielle.lopez.quizmo.common.BaseEntity;

@Entity
@Table(name = "games")
public class Game extends BaseEntity {
	@Column
	private int score;
	
	@Column
	private String[] questions;
	
	@Column
	private String[] submittedAnswers;
	
	@Column
	private String[] correctAnswers;
	
	@Column
	private List<String[]> incorrectAnswers;
	
	public Game() {
		super();
	};
	
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
