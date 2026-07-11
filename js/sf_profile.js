var fun_fact_clicked = false
var dice = null

$(function() {
    const fun_facts = {
        "alek": () => {
            const fun_fact = ["Alek has a big headphone dent, And he's very insecure about it.", "Alek is an ambivert.", "Alek's eyes are red when hes anxious.", "Alek shares pants and shoes with QD", "Alek loves spaghetti.", "He is afraid of lakes."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            console.log("dice: ", dice)
            $(".fun-fact-button").text(fun_fact[dice]);
        },
        "qd": () => {
            const fun_fact = ["QD shares pants and shoes with Alek", "QD really likes gummy bears.", "His favorite cartoon character is Rags Rabbit.", "QD is learning karate.", "He is fast as a bunny. (thus, nickname: Bunny Boy)", "QD can't stand bullies."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            $(".fun-fact-button").text(fun_fact[dice]);
        },
        "squiddo": () => {
            const fun_fact = ["Squiddo's favorite dish is carbonara pasta.", "Plays football", "Squiddo hates peanut butter", "Squiddo is aromantic.", "Squiddo is very smart.", "Squiddo is really into board games."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            $(".fun-fact-button").text(fun_fact[dice]);
        },
        "doggie": () => {
            const fun_fact = ["Doggie likes peanut butter.", "Doggie brushes her hair 57 times a day.", "Doggie likes to chew things for focus.", "Doggie plays volleyball.", "She has a double life, One with the main cast, the other one with Emily and Alyson.", "She likes reading, especially Mystery Novels."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            $(".fun-fact-button").text(fun_fact[dice]);
        },
        "jake": () => {
            const fun_fact = ["Jake is a secret pop listener.", "He is afraid of lakes.", "Jake watches short bully videos to make himself look cooler.", "As popular Jake is, his only true friends are Mike, Alyson and his girlfriend Emily.", "Jake is envy of Alek's talent.", "Jake is afraid of reaching out."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            $(".fun-fact-button").text(fun_fact[dice]);
        },
        "emily": () => {
            const fun_fact = ["She never actually wears her star glasses and ONLY uses it for her outfit.", "She has a pair of reading glasses but only wears them in private.", "Shes very very VERY scared of rats.", "Emily is volleyball captain of The Panthers team.", "Emily has a young brother named Andrew.", "Emily is afraid of people judging her."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            $(".fun-fact-button").text(fun_fact[dice]);
        },
        "alyson": () => {
            const fun_fact = ["Everyday she has to dye her hair 3 times a day because her hair is dying.", "Alyson has a very social life.", "She loves romance shows.", "Shes very active on social media and posts daily pictures of her life to her profile.", "Shes uses emoticons only when shes texting her close friends (being Doggie and Emily.)", "Shes a very picky eater"];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
            $(".fun-fact-button").text(fun_fact[dice]);
        },
        "mike": () => {
            const fun_fact = ["Mike has trypophobia.", "Mike thinks the whole world is gray because of his glasses.", "Mike loves to watch YouTube Kids", "Mike would collect car toys.", "Mike really likes bacon.", "Mike has a secret pet rock named Peanut."];
            dice = Math.round(Math.random() * (fun_fact.length - 1));
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