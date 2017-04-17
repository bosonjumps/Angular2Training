/**
 * Created by Franz on 3/28/2017.
 */

import {Component} from "@angular/core";
import {jewelryRackList, allList} from "../../util/constants.various";
import {IInventoryItem} from "../../shapes/IInventoryItem";

@Component({
  selector:'inventory-manager',
  templateUrl: 'app/components/inventoryManager/inventoryManager.component.html'
}) export class InventoryManager {
  selectedContext:string;
  jewelryRackListName:string = jewelryRackList;
  allListName:string = allList;
  itemEdited:IInventoryItem;

  constructor() {}

  setContext(context:string) {
    this.selectedContext = context;
  }

  editItem($event:IInventoryItem) {
    this.itemEdited = $event;
  }
}