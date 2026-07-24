var fun_fact_clicked = false
var dice = null

$(function() {
    const fun_facts = {
        "alek": () => {
            const fun_fact = ["He is afraid of lakes.", "Alek has a big headphone dent, And he's very insecure about it.", "Alek is an ambivert.", "Alek's eyes are red when hes anxious.", "Alek shares pants and shoes with QD", "Alek loves spaghetti.", "He is afraid of lakes.", "Alek prefers winter so he can drink hot chocolate everyday and stay indoors.", "Alek and Qd tend to secretly role-play. (You don’t need to know what…)", "Alek is a sleep talker, It scares QD because everytime he sleep talks, he talks in a language nobody has ever heard of. Not even Alek knows what hes saying.", "Alek never takes an umbrella when it’s raining. He loves to feel the rain on his skin.", "Alek likes to take photos of everything he finds interesting because of his short memory. This way he can remember it.", "Alek has a secret crush.", "Alek's favorite animal is a cat.", "Alek's favorite flower is a Violet.", "Alek's favorite food taste is Sourness."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            console.log("Alek Fun Facts Count: ", fun_fact.length)
            var fact = fun_fact[dice]
            if (fact == "He is afraid of lakes.") {
                $(".lake-button").removeClass("hidden");
            }
            else {
                $(".lake-button").addClass("hidden");
            }
            $(".fun-fact-button").text(fact);
        },
        "qd": () => {
            const fun_fact = ["QD shares pants and shoes with Alek", "QD really likes gummy bears.", "His favorite cartoon character is Rags Rabbit.", "QD is learning karate.", "He is fast as a bunny. (thus, nickname: Bunny Boy)", "QD can't stand bullies.", "Alek and Qd tend to secretly role-play. (You don’t need to know what…)", "Qd And Doggie argue most of the time as they can't get along. They however try their best for Alek.", "QD's favorite animal is a bunny.", "QD's favorite flower is a Marigold.", "Qd's favorite food taste is Sweetness.", "QD's favorite sport is football."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            console.log("QD Fun Facts Count: ", fun_fact.length)
            $(".fun-fact-button").text(fun_fact[dice]);
        },
        "squiddo": () => {
            const fun_fact = ["Squiddo's favorite dish is carbonara pasta.", "Plays football", "Squiddo hates peanut butter", "Squiddo is aromantic.", "Squiddo is very smart.", "Squiddo is really into board games.", "Squiddo keeps a secret coin collection, Not even Doggie knows about it.", "Squiddo's favorite animal is a squid.", "Squiddo's favorite flower is a Ivy.", "Squiddo's favorite food taste is Umami.", "Squiddo's favorite sport is football."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            console.log("Squiddo Fun Facts Count: ", fun_fact.length)
            $(".fun-fact-button").text(fun_fact[dice]);
        },
        "doggie": () => {
            const fun_fact = ["Doggie likes peanut butter.", "Doggie brushes her hair 57 times a day.", "Doggie likes to chew things for focus.", "Doggie plays volleyball.", "She has a double life, One with the main cast, the other one with Emily and Alyson.", "She likes reading, especially Mystery Novels.", "Doggie prefers winter so she can wear those sweaters with the cute paw prints on the sleeves", "Doggie collects Brokemon cards but doesn't know the value of each card she gets, she just keeps the ones she likes", "Doggie will eat anything on pizza, even pineapple.", "Doggie Isn't allowed to drink coffee / energy drinks (she's already energetic enough)", "She would go to the local amusement just to take pictures with the princesses and dress up as one.", "Qd And Doggie argue most of the time as they can't get along. They however try their best for Alek.", "Doggie's favorite animal is a dog.", "Doggie's favorite flower is a Violet.", "Doggie's favorite food taste is Sweetness.", "Doggie's favorite sport is volleyball."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            console.log("Doggie Fun Facts Count: ", fun_fact.length)
            $(".fun-fact-button").text(fun_fact[dice]);
        },
        "jake": () => {
            const fun_fact = ["He is afraid of lakes.", "Jake is a secret pop listener.", "Jake watches short bully videos to make himself look cooler.", "As popular Jake is, his only true friends are Mike, Alyson and his girlfriend Emily.", "Jake is envy of Alek's talent.", "Jake is afraid of reaching out.", "Jake has 'bindr' on his phone", "Jake's favorite animal is a wolf.", "Jake's favorite flower is a Amaryllis.", "Jake's favorite food taste is Bitterness.", "Jake's favorite sport is football."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            console.log("Jake Fun Facts Count: ", fun_fact.length)
            var fact = fun_fact[dice]
            if (fact == "He is afraid of lakes.") {
                $(".lake-button").removeClass("hidden");
            }
            else {
                $(".lake-button").addClass("hidden");
            }
            $(".fun-fact-button").text(fact);
        },
        "emily": () => {
            const fun_fact = ["She never actually wears her star glasses and ONLY uses it for her outfit.", "She has a pair of reading glasses but only wears them in private.", "Shes very very VERY scared of rats.", "Emily is volleyball captain of The Panthers team.", "Emily has a young brother named Andrew.", "Emily is afraid of people judging her.", "Emily used to be a demigirl, later on she became more feminine to fit in.", "Emily thinks listening to Lada rel May makes her coquette", "Emily's favorite animal is a fox.", "Emily's favorite flower is a Peony.", "Emily's favorite food taste is Sweetness.", "Emily's favorite sport is volleyball."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            console.log("Emily Fun Facts Count: ", fun_fact.length)
            $(".fun-fact-button").text(fun_fact[dice]);
        },
        "alyson": () => {
            const fun_fact = ["Everyday she has to dye her hair 3 times a day because her hair is dying.", "Alyson has a very social life.", "She loves romance shows.", "Shes very active on social media and posts daily pictures of her life to her profile.", "Shes uses emoticons only when shes texting her close friends (being Doggie and Emily.)", "Shes a very picky eater", "Alyson, while being an aesthetic snob, can't comprehend or write in cursive.", "Alyson's favorite animal is a tiger.", "Alyson's favorite flower is a Rose.", "Alyson's favorite food taste is Sourness.", "Alyson's favorite sport is tennis."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            console.log("Alyson Fun Facts Count: ", fun_fact.length)
            $(".fun-fact-button").text(fun_fact[dice]);
        },
        "mike": () => {
            const fun_fact = ["Mike has trypophobia.", "Mike thinks the whole world is gray because of his glasses.", "Mike loves to watch YouTube Kids", "Mike would collect car toys.", "Mike really likes bacon.", "Mike has a secret pet rock named Peanut.", "Mike's favorite animal is a duck.", "Mike's favorite flower is a Poaceae.", "Mike's favorite food taste is Saltiness.", "Mike's favorite sport is doom scrolling."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            console.log("Mike Fun Facts Count: ", fun_fact.length)
            $(".fun-fact-button").text(fun_fact[dice]);
        },
    };
    var debounce = false
    $(".fun-fact-button").on("click", function() {
        if (debounce) return;
        debounce = true
        fun_fact_clicked = !fun_fact_clicked
        
        const data = $(this).data("fun");
        $(this).toggleClass("active");
        if (fun_fact_clicked) {
            fun_facts[data]?.()
        }
        else {
            $(this).text("");
        };
        setTimeout(() => {
            debounce = false
        }, 1000);
    });
});