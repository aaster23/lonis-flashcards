import * as cardsService from './cards.service.js';

import {
  log,
} from './logger.js';

log(cardsService.all().length);
