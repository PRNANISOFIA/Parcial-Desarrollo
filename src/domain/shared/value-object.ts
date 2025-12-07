export abstract class ValueObject<T = unknown> {
  protected abstract readonly props: T;

  equals(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    if (vo.props === undefined) {
      return false;
    }
    if (this === vo) {
      return true;
    }
    return JSON.stringify(this.props) === JSON.stringify(vo.props);
  }
}

