package marielle.lopez.quizmo.games;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/games")
public class GameController {
	@Autowired
	private GameService gameService;
	
	@GetMapping
	public String getAllGames() {
		return this.gameService.getAllGames();
	};
	
	@PostMapping
	public String saveGame() {
		return this.gameService.saveGame();
	}
	
	@PatchMapping
	public String updateGame() {
		return this.gameService.updateGame();
	};
	
	@DeleteMapping
	public String deleteGame() {
		return this.gameService.deleteGame();
	};
}
