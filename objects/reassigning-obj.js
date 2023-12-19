const bands = { a: "Kraftwerk", b: "Talking Heads", c: "LCD Soundsystem" };

//// replace LCD Soundsystem with The Beatles
bands.c = "The Beatles";

//// put LCD Soundsystem back in the object with the key of d
bands.d = "LCD Soundsystem";

//// delete Kraftwerk
delete bands.a;

console.log(bands);
