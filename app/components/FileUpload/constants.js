import React from 'react';
import DropIcon from '-!babel-loader!svg-react-loader?name=ExitIcon!./dropzone.svg';
import ErrorIcon from '-!babel-loader!svg-react-loader?name=ExitIcon!./error.svg';
import SuccessIcon from '-!babel-loader!svg-react-loader?name=ExitIcon!./success.svg';
import Loader from '-!babel-loader!svg-react-loader?name=ExitIcon!./loader.svg';

export const DROPZONES_STATES = {
  default: {
    icon: <DropIcon />,
    heading: 'Kliknij lub przeciągnij',
    helper: (
      <span>
        by dodać zdjęcia lub trasy
        <p>Trasy w formacie GPX</p>
        <p>Zdjęcia w formacie JPG/PNG</p>
      </span>
    ),
    info: <span>Limit pliku: 16mb.</span>,
  },
  success: {
    icon: <SuccessIcon />,
    heading: 'Załadowane!',
    helper: 'Plik został załadowany!',
    info: 'Poszukaj innych plików',
  },
  error: {
    icon: <ErrorIcon />,
    heading: 'Coś się nie teges...',
    helper: 'Próbowałeś wgrać plik o złym rozszerzeniu?',
    info: 'Poszukaj innego pliku',
  },
  loading: {
    icon: <Loader />,
    heading: 'Ładujemy',
    helper: 'ZzzzzZzzzzzZzzzz. Obudź się.',
    info: '...',
  },
};
