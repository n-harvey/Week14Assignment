import React from 'react';
import Movie  from './movies';

export default class MovieList extends React.Component{
    render(){
        let movieOne = {
            name: 'John Wick',
            summary: 'Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John\'s prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef\'s father (Michael Nyqvist) -- John\'s former colleague -- puts a huge bounty on John\'s head.',
            posterUrl: 'https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg',
            
        }
        let movieTwo = {
            name: 'ARMAGEDDON',
            summary: 'When an asteroid threatens to collide with Earth, NASA honcho Dan Truman (Billy Bob Thornton) determines the only way to stop it is to drill into its surface and detonate a nuclear bomb. This leads him to renowned driller Harry Stamper (Bruce Willis), who agrees to helm the dangerous space mission provided he can bring along his own hotshot crew. Among them is the cocksure A.J. (Ben Affleck), who Harry thinks isn\'t good enough for his daughter (Liv Tyler), until the mission proves otherwise.',
            posterUrl: 'https://randommer.io/images/movies/95.webp',

        }
        let movieThree = {
            name: 'Constantine',
            summary: 'As a suicide survivor, demon hunter John Constantine (Keanu Reeves) has literally been to hell and back -- and he knows that when he dies, he\'s got a one-way ticket to Satan\'s realm unless he can earn enough goodwill to climb God\'s stairway to heaven. While helping policewoman Angela Dodson (Rachel Weisz) investigate her identical twin\'s apparent suicide, Constantine becomes caught up in a supernatural plot involving both demonic and angelic forces. Based on the DC/Vertigo "Hellblazer" comics.',
            posterUrl: 'https://randommer.io/images/movies/561.webp',
        }
        let movieFour = {
            name: 'The Usual Suspects',
            summary: '"The greatest trick the devil ever pulled was convincing the world he didn\'t exist," says con man Kint (Kevin Spacey), drawing a comparison to the most enigmatic criminal of all time, Keyser Soze. Kint attempts to convince the feds that the mythic crime lord not only exists, but is also responsible for drawing Kint and his four partners into a multi-million dollar heist that ended with an explosion in San Pedro Harbor - leaving few survivors.',
            posterUrl: 'https://randommer.io/images/movies/629.webp',
        }
        return (
        <div className='container pt-2'>
            <Movie {...movieOne}/>
            <br></br>
            <Movie {...movieTwo}/>
            <br></br>
            <Movie {...movieThree}/>
            <br></br>
            <Movie {...movieFour}/>
        </div>
        )
    }
}