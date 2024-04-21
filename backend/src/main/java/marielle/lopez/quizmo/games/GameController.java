package marielle.lopez.quizmo.games;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import marielle.lopez.quizmo.exceptions.NotFoundException;

@RestController
@RequestMapping("/games")
public class GameController {
	@Autowired
	private GameService gameService;
	
	@GetMapping
	public ResponseEntity<List<Game>> getAllGames() {
		List<Game> allGames = this.gameService.getAllGames();
		return new ResponseEntity<>(allGames, HttpStatus.OK);
	};
	
	@GetMapping("/{id}")
	public ResponseEntity<Game> getGame(@PathVariable Long id) throws NotFoundException {
		Optional<Game> maybeGame = this.gameService.getGameById(id);
		Game foundGame = maybeGame.orElseThrow(() -> new NotFoundException(Game.class, id));
		return new ResponseEntity<>(foundGame, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Game> createGame(@Valid @RequestBody CreateGameDTO data) {
		Game createdGame = this.gameService.createGame(data);
		return new ResponseEntity<>(createdGame, HttpStatus.CREATED);
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<Game> updateGame(@PathVariable Long id, @Valid @RequestBody UpdateGameDTO data) throws NotFoundException {
		Optional<Game> maybeUpdatedGame = this.gameService.updateGameById(id, data);
		Game updatedGame = maybeUpdatedGame.orElseThrow(() -> new NotFoundException(Game.class, id));
		return new ResponseEntity<>(updatedGame, HttpStatus.OK);
	};
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Game> deleteGame(@PathVariable Long id) throws NotFoundException {
		boolean deleted = this.gameService.deleteGameById(id);
		if (!deleted) {
			throw new NotFoundException(Game.class, id);
		};
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	};
}
