package marielle.lopez.quizmo.games;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class GameService {
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private GameRepository gameRepository;
	
	public List<Game> getAllGames() {
		return this.gameRepository.findAll();
	};
	
	public Game createGame(@Valid CreateGameDTO data) {
		Game newGame = modelMapper.map(data, Game.class);
		return this.gameRepository.save(newGame);
	};
	
	public Optional<Game> updateGameById(Long id, @Valid UpdateGameDTO data) {
		Optional<Game> maybeGame = this.gameRepository.findById(id);
		if (maybeGame.isEmpty()) {
			return maybeGame;
		};
		Game foundGame = maybeGame.get();
		modelMapper.map(data, foundGame);
		Game updatedGame = this.gameRepository.save(foundGame);
		return Optional.of(updatedGame);
	};
	
	public boolean deleteGameById(Long id) {
		Optional<Game> maybeGame = this.gameRepository.findById(id);
		if (maybeGame.isEmpty()) {
			return false;
		};
		this.gameRepository.delete(maybeGame.get());
		return true;
	}

	public Optional<Game> getGameById(Long id) {
		return this.gameRepository.findById(id);
	};
}
