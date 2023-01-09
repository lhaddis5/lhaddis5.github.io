alert("You  woke up in the middle of nowhere with a note in your hand which reads: find the hidden treasure by the river. However you do not know where that is, so now you have two choices. You can either go to the nearby town and ask the locals, or explore the field.");

let town_or_field = prompt("Do you (1) go into the town to ask a local, or (2) walk through the endless field? Please type the 1 for town, and 2 for field.");

if(town_or_field == 1){
    let towns_girl_or_tavern = prompt("You sit up, dust yourself off, and head to the small town. Once you have arrived, you look at all of the small wooden houses. As you are admiring the village, you see a young woman with a basket of clothes on your left and a pub on your right. You are trying chose to(1) Ask the young lady for directions to the nearby river, or (2) walk into the pub. Please type 1 for woman and 2 for pub");
    if(towns_girl_or_tavern == 1){
        alert("You ask for the beautiful lady for directions, and the woman sadly happens to be a pycho. She kills you on the spot. Game over.")
    }else{
        let leave_or_drink = prompt("You enter the bar and look at the clock to see that it's 2:00 pm. You scan the room to see everyone has a drink in their hands (hey, it's 5 o'clock somewhere). You happen to be really thirsty, but you don't know if you should (1) sit and have a drink or (2) leave the bar. Please type 1 for a drink and 2 to leave.");
            if(leave_or_drink == 1){
                alert("You decide that you want a drink and the kind bartender ends up serving you. So you end up choosing the purple berry drink. It was so good, you drank the whole drink less than 30 seconds. Sadly, it turns out you are highly allergic to purple berries. You end up dying of an allergic reaction. Game over. ");
            } else{
                let shovel_or_chest = prompt ("As you leave the bar, you continue  to walk north and stumble upon the river. You accidentally stub your toe on something. You look down to find a (1) shovel and (2) a chest. You can start to dig the shovel or open the chest. Please choose 1 for shovel and 2 for chest");
                if(shovel_or_chest == 1)
                alert("You make the smart choice and start digging. You finally if something at the bottom to see piles of gold. Find Gold (ending 1)");
                else{
                    if(shovel_or_chest == 2){
                        alert("You open the chest in hopes of tons gold bars, but you end up be greated by tons of tnt. You end up exploding. Game over.")
                }
                    }
                    
        
            }
        
            
            }
                
              
                
        }
        
        
        
    
else{

if(town_or_field == 2){
    let berries_or_fish = prompt("You enter the field and start walking. As you are walk you get really hungry. You see a big bush full of sweet purple berries and a pond with fish. Do you (1) eat the berries or (2) eat the fish");
    if(berries_or_fish == 1)
  alert("You choose that you want a a sweet and simply treat . They where so good, you ate the whole bush in less than 30 seconds. Sadly, it turns out you are highly allergic to purple berries. You end up dying of an allergic reaction. Game over. ");
}else{
    let raw_or_cooked = prompt(" You wanted some fish, so you jump into the pond to catch a couple of fish. Now that you have caught the fish, you don't know whether to (1) to just eat the fish, or (2) try to cook the fish. Please type (1)for raw and (2)for cooked. ");
    if(raw_or_cooked == 1){
        alert("Because you chose to have you're fish sashimi style, you end up dying of food posioning. Game over ");
    }else{
        if(raw_or_cooked == 2){
            let friend_or_foe = prompt("Now that you have the fish, you are trying to make a fire out of dried grass. As you are struggling making a fire, a wolf comes out of nowhere. The wolf looks pretty hungery and is staring at your fish. Do you (1) give your fish to the wolf, or (2) keep your fish. ");
            if (friend_or_foe == 1){
                alert("You give the fish to the wolf and she eats all of it. As you are sitting there hungry, the wolf takes a liking to you. She slowly walks to you and nudges you with her head for you to follow her. She leads you to a cave with the rest of her pack. You do not find the gold, but you end up with a furry family. Part of the Pack (ending 2)");
            } else {
                if (friend_or_foe == 2){
                    alert("You look at the fish, and you decide to eat it infront of the wolf. She gets angery and pounces on you, and she bites your limbs of in return. Obsivously you end up dying. game over.");
        }
    
    
                
                        }
                    }
                } 
            }
        }
    
   
    
