editIngredient("mussel",{
    broken:"mussel_meat",
    shape:"lens_vertical"
});

addIngredient("mussel_meat",{
    shape:"rectangle_thinner_tablet",
    group:"generic",
    color:"#E4B56A",
    cookColor:"#AE7142",
    scale:1.0,
    keywords:"mussel,flesh,shellfish",
    dishName:"mussel_meat",
    cookName:"cooked_mussel_meat",
    adj:"mussel_meat",
    hidden:false
  });

editIngredient("clam",{
    broken:"clam_meat"
});

addIngredient("clam_meat",{
    type:"mussel_meat",
    color:"#D8C497",
    cookColor:"#B19B66",
    shape:"fruit_nub",
    stackshape:"rectangle_thinner_tablet",
    scale:0.8,
    keywords:"clam,flesh,shellfish",
    dishName:"clam_meat",
    cookName:"cooked_clam_meat",
    adj:"clam_meat",
    hidden:false
  });

addIngredient("green_lipped_mussel",{
    type:"mussel",
    color:"#3E5448",
    scale:1.0,
    keywords:"green,mussel,zealand,shellfish",
    dishName:"green_lipped_mussel",
    cookName:"cooked_green_lipped_mussel",
    adj:"green_lipped_mussel",
    hidden:false,
    broken:"green_lipped_mussel_meat"
  });

addIngredient("green_lipped_mussel_meat",{
    type:"mussel_meat",
    color:"#DDA85F",
    cookColor:"#D87E3D",
    dishName:"green_lipped_mussel_meat",
    cookName:"cooked_green_lipped_mussel_meat",
    adj:"green_lipped_mussel_meat",
    hidden:true
  });

addIngredient("blue_mussel",{
    type:"mussel",
    color:"#727890",
    keywords:"blue,mussel,shellfish",
    dishName:"blue_mussel",
    cookName:"cooked_blue_mussel",
    adj:"blue_mussel",
    hidden:false,
    broken:"blue_mussel_meat"
  });

addIngredient("blue_mussel_meat",{
    type:"mussel_meat",
    color:"#C9854D",
    dishName:"blue_mussel_meat",
    cookName:"cooked_blue_mussel_meat",
    adj:"blue_mussel_meat",
    hidden:true
  });

