import {Request} from './Request';


class ArticleRequest extends Request {
  constructor(){
    super('/articles');
  }
}

export default new ArticleRequest();