export class GenObject {
  constructor(
    public obituaryId: number,
    public categoryId: string
  ) {
  }
}

export class Feed {
  constructor(
    public type: string,
    public object: GenObject
  ) {
  }
}

export class ReactionObject extends GenObject {
  constructor(
    public actionId: string,
    public userName: string,
    public obituaryId: number,
    public categoryId: string
  ) {
    super(obituaryId, categoryId);
  }
}

export class ObituaryObject extends GenObject {
  constructor(
    public deathDay: string,
    public name: string,
    public obituaryId: number,
    public categoryId: string
  ) {
    super(obituaryId, categoryId);
  }
}

