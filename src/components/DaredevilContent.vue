<template>
    <div id='catch-me-if-you-can'>
        <div id="overlay"><p>turn on your screenreader</p></div>
        <div role="main" id="content">
            <h1>Daredevil</h1>
            <h2>About</h2>
            <p>
                Daredevil (Matt Murdock) is a fictional superhero appearing in American comic books published by Marvel Comics. Daredevil was created by writer-editor Stan Lee and artist Bill Everett, with an unspecified amount of input from Jack Kirby. The character first appeared in Daredevil #1 (April 1964). Writer/artist Frank Miller's influential tenure on the title in the early 1980s cemented the character as a popular and influential part of the Marvel Universe. Daredevil is commonly known by such epithets as "Hornhead", "The Man Without Fear" and "The Devil of Hell's Kitchen".
                Daredevil's origins stem from a childhood accident that gave him special abilities. While growing up in the historically gritty or crime-ridden working class Irish-American neighborhood of Hell's Kitchen in New York City, Matt Murdock is blinded by a radioactive substance that falls from an out-of-control truck after he pushes a man out of the path of the oncoming vehicle. While he can no longer see, his exposure to the radioactive material heightens his remaining senses beyond normal human ability, and gives him a "radar sense." His father, a boxer named Jack Murdock, is a single man raising his now blind son, who despite his rough upbringing, unconditionally loves his son and tries to teach him to form a better life for himself. Jack is later killed by gangsters after refusing to throw a fight, leaving Matt an orphan. In order to protect himself, Matt began training to hone his physical abilities and superhuman senses under the tutelage of a mysterious blind stranger named Stick, eventually becoming a highly skilled and expert martial artist. Some years later, after graduating from law school with high grades, Matt seeks out the criminal element in Hell's Kitchen and starts his crime-fighting activities. Matt targets the local gangsters who murdered his father and succeeds in bringing them to justice. Eventually, donning a costumed attire modeled after a devil, Matt took up a dual life of fighting against the criminal underworld in New York City as the masked vigilante Daredevil, which put him in conflict with many super-villains, including his arch-enemies Bullseye and the Kingpin. He also becomes a skilled and respected lawyer after graduating from Columbia Law School with his best friend and roommate, Franklin "Foggy" Nelson, with whom he becomes law partners, forming the law firm Nelson & Murdock.
            </p>
            <img src="../assets/daredevil-cup.jpg" alt="A promotional poster for the Daredevil Cup in the videogame Fortnite, an ingame recreation of the Daredevil character looks menacingly straigt into the camera. The poster contains the text: 'Play for a chance to earn the daredevil outfit, october 14.'.">
        </div>
    </div>
</template>

<script>
export default {
  name: 'DaredevilContent'
}
</script>

<style scoped>
#content {
    z-index: -1;
    position: absolute;
}

#overlay {
    width: 100%;
    height: 100%;
    background-color: white;
    position: absolute;
}
</style>