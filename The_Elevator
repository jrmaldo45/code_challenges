class Elevator:
  def __init__(self, num_floors):
    #initialize the number of floors, the current floor, and if the elevator is moving
    self.num_floors = num_floors
    self.current_floor = 1
    self.is_moving = False

  #create function that handles the elevator moving
  def move(self, target_floor):
    self.is_moving = True
    print(f"Elevator moving from floor {self.current_floor} to floor {target_floor}")
    self.current_floor = target_floor
    self.is_moving = False
    print(f"Elevator has arrived at floor {self.current_floor}")

  #create function that handles when an elevator is called
  def request_floor(self, requested_floor):
    if requested_floor == self.current_floor:
      print(f"Elevator is already on floor {requested_floor}")
    elif requested_floor > self.num_floors or requested_floor < 1:
      print(f"Invalid floor number: {requested_floor}")
    elif self.is_moving:
      print(f"Elevator is already moving to floor {self.current_floor}")
    else:
      self.move(requested_floor)

#create an elevator object with 10 floors
elevator = Elevator(10)

#test the elevator
elevator.request_floor(5)
elevator.request_floor(10)
elevator.request_floor(10)
elevator.request_floor(16)
