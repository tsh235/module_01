'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = (lang, language) => {
    // получили значение от пользователя
    const getFigurePlayer = () => {
      const figureUser = (prompt([...lang].join(', '))).toLowerCase();

      if (!lang.some((elem) => elem.startsWith(figureUser))) {
        getFigurePlayer();
      }

      if (figureUser[0] === 'к' &&
        (language !== 'EN' || language !== 'ENG')) return 'камень';
      if (figureUser[0] === 'н' &&
        (language !== 'EN' || language !== 'ENG')) return 'ножницы';
      if (figureUser[0] === 'б' &&
        (language !== 'EN' || language !== 'ENG')) return 'бумага';
      if (figureUser[0] === 'r' &&
        (language === 'EN' || language === 'ENG')) return 'rock';
      if (figureUser[0] === 's' &&
        (language === 'EN' || language === 'ENG')) return 'scissors';
      if (figureUser[0] === 'p' &&
        (language === 'EN' || language === 'ENG')) return 'paper';
    };

    const figurePlayer = getFigurePlayer();

    // получили от компа значение
    const figureComputer =
      lang[getRandomIntInclusive(0, lang.length - 1)];

    console.log(`${figurePlayer[0]} - ${figureComputer[0]}`);

    // возвращаем массив из полученных значений
    return [figurePlayer, figureComputer];
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;

    return function start() {
      // проверяем полученный результат
      const chekResult = ([player, computer], language) => {
        if (
          (player === 'камень' && computer === 'ножницы' ||
            player === 'rock' && computer === 'scissors') ||
          (player === 'ножницы' && computer === 'бумага' ||
            player === 'scissors' && computer === 'paper') ||
          (player === 'бумага' && computer === 'камень' ||
            player === 'paper' && computer === 'rock')
        ) {
          language === 'EN' || language === 'ENG' ?
          alert(`
          Computer: ${computer}
          You: ${player}
          Result: You win!`) :
          alert(`
          Компьютер: ${computer}
          Вы: ${player}
          Результат: Вы выиграли`);
          result.player++;
        } else if (player === computer) {
          language === 'EN' || language === 'ENG' ?
          alert(`
          Computer: ${computer}
          You: ${player}
          Result: Draw in the game!`) :
          alert(`
          Компьютер: ${computer}
          Вы: ${player}
          Результат: Ничья`);
        } else {
          language === 'EN' || language === 'ENG' ?
          alert(`
          Computer: ${computer}
          You: ${player}
          Result: Computer win!`) :
          alert(`
          Компьютер: ${computer}
          Вы: ${player}
          Результат: Компьютер выиграл`);
          result.computer++;
        }
      };

      // продолжение игры
      const continueGame = (language) => {
        const maybeMore = language === 'EN' || language === 'ENG' ?
          confirm('Continue?') : confirm('Продолжим?');
        if (maybeMore) {
          const figures = getFigure(lang, language);
          chekResult(figures, language);
          continueGame(language);
        } else {
          const youSure = language === 'EN' || language === 'ENG' ?
          confirm('Are you sure you want to finish the game?') :
          confirm('Точно хотите выйти?');
          if (!youSure) {
            const figures = getFigure(lang, language);
            chekResult(figures, language);
            continueGame(language);
          } else {
            language === 'EN' || language === 'ENG' ?
              alert(`
              Ok. The game is over!
              Your result: ${result.player}
              Computer result: ${result.computer}
              See you soon!`) :
              alert(`
              Жаль. Игра окончена!
              Ваш результат: ${result.player}
              Результат компьютера: ${result.computer}
              До новых встреч!`);
          }
        }
      };

      const figures = getFigure(lang, language);
      chekResult(figures, language);
      continueGame(language);
    };
  };

  window.rsp = game;
})();
