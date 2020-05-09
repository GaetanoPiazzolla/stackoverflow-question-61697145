import {Component, OnInit} from '@angular/core';
import {Feed, GenObject, ObituaryObject, ReactionObject} from '../model/Model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  reactionObject: Feed;

  obituaryObject: Feed;

  constructor() {
    console.log('constructing');
  }

  ngOnInit(): void {

    const object = new ReactionObject('action',
      'username',
      1,
      'cat');

    this.reactionObject = new Feed('type', object);

    const object2 = new ObituaryObject('today',
      'francesca',
      1,
      '2');

    this.obituaryObject = new Feed('type2', object2);

  }

  getReaction(object: GenObject) {
    if (object instanceof ReactionObject) {
      return object as ReactionObject;
    }
  }

  getObituary(object: GenObject) {
    if (object instanceof ObituaryObject) {
      return object as ObituaryObject;
    }
  }
}
