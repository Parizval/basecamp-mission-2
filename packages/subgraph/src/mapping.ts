import {
  CommsEstablished as CommsEstablishedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/Comms/Comms";
import { CommsEstablished, OwnershipTransferred } from "../generated/schema";

export function handleCommsEstablished(event: CommsEstablishedEvent): void {
  // STEP 1: Create a new CommsEstablished entity
  // STEP 2: Set the properties of the entity using event data
  // STEP 3: Save the entity to the database using the save() method
  let id = event.transaction.hash;
  let commsEntity = new CommsEstablished(id);

  commsEntity.account = event.params.account;
  commsEntity.isCommsEstablished = event.params.isCommsEstablished;

  commsEntity.blockNumber = event.block.number;
  commsEntity.blockTimestamp = event.block.timestamp;
  commsEntity.transactionHash = id;

  commsEntity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  // STEP 1: Create a new OwnershipTransferred entity
  // STEP 2: Set the properties of the entity using event data
  // STEP 3: Save the entity to the database using the save() method
  let id = event.transaction.hash;
  let newOwnership = new OwnershipTransferred(id);

  newOwnership.newOwner = event.params.newOwner;
  newOwnership.previousOwner = event.params.previousOwner;

  newOwnership.blockNumber = event.block.number;
  newOwnership.blockTimestamp = event.block.timestamp;
  newOwnership.transactionHash = event.transaction.hash;

  newOwnership.save();
}
