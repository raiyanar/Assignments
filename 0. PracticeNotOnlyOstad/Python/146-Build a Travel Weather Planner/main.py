distance_mi = 2
is_raining = True
has_bike = False
has_car = True
has_ride_share_app = True

if distance_mi == False:
    print("False")
elif distance_mi <= 1:
    if is_raining != True:
        print("True")
    else:
        print("False")
elif distance_mi > 1 and distance_mi <= 6:
    if has_bike == True and is_raining != True:
        print("True")
    else:
        print("False")
elif distance_mi > 6:
    if has_car == True or has_ride_share_app:
        print("True")
    else:
        print("False")
    


