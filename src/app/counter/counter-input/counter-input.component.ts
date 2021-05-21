import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as CounterActions from '../state/counter.action';
import {CounterState} from "../state/counter.state";
import {getServerName} from "../state/counter.selectors";
import {Observable} from "rxjs";
import {AppState} from "../../store/app.state";

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {

  value: number = 0;
  serverName$: Observable<string> | undefined;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.serverName$ = this.store.select<string>(getServerName);
  }

  changeServerName(){
    this.store.dispatch(CounterActions.changeServerName({serverName: 'Amazon'}));
  }

  addNumber(){
    this.store.dispatch(CounterActions.addNumber({value: +this.value}));
  }

}
