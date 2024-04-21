package marielle.lopez.quizmo.games;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/games")
public class GameController {
	@GetMapping
	public String getAllGames() {
		return "This gets all games";
	};
	
	@PostMapping
	public String saveGame() {
		return "This saves a game";
	}
	
	@PatchMapping
	public String updateGame() {
		return "This updates a game";
	};
	
	@DeleteMapping
	public String deleteGame() {
		return "This deletes a game";
	};
}
