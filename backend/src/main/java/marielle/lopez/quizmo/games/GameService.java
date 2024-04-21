package marielle.lopez.quizmo.games;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class GameService {
	public String getAllGames() {
		return "This gets all games";
	};
	
	public String saveGame() {
		return "This saves a game";
	};
	
	public String updateGame() {
		return "This updates a game";
	};
	
	public String deleteGame() {
		return "This deletes a game";
	};
}
