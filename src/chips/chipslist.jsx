import { languages } from '../chips/chips'
import { useState } from 'react'
import { clsx } from 'clsx'
import { nextWord, farwallText } from '../chips/dumyData'

export default function ChipsList () {


    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    const [ currentWord, setCurrentWord ] = useState( nextWord() )
    const [ guessedWords, setGuessedWords ] = useState( [] )

    const numGuessLeft = languages.length - 1
    const wrongGuessCount = guessedWords.filter( ( letter ) => !currentWord.includes( letter ) ).length
    const isgameLost = wrongGuessCount >= numGuessLeft
    const isGameWon = currentWord.split( '' ).every( ( letter ) => guessedWords.includes( letter ) )
    const isGameOver = isgameLost || isGameWon
    const lastGuessedLetter = guessedWords[ guessedWords.length - 1 ]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes( lastGuessedLetter )
    function addGuessedWord ( letter ) {
        setGuessedWords( ( prev ) => {
            console.log( prev )
            return prev.includes( letter ) ? prev : [ ...prev, letter ]

        } )

        console.log( guessedWords.length )


    }

    function resetGame () {
        setGuessedWords( [] )
        setCurrentWord( nextWord() )
    }

    const gamestatusElement = ( () => {
        if ( isGameOver && isgameLost ) {
            return (
                <section className={ clsx( 'status-container', 'game-lost' ) }>
                    <h2>Game Over</h2>
                    <p>You loose Better start learning Assembly  !!</p>
                </section>
            )
        } else
            if ( isGameOver && isGameWon ) {
                return (
                    <section className={ clsx( 'status-container', 'game-won' ) }>
                        <h2>You Win</h2>
                        <p>Well Done !!</p>
                    </section>
                )
            }
            else if ( guessedWords.length > 0 ) {
                return (
                    <section className={ clsx( 'status-container', 'in-progress' ) }>
                        <p>
                            { farwallText( currentWord ) }
                        </p>
                    </section>

                )
            } else {
                <section className={ clsx( 'status-container', 'hidden' ) }>
                    <p>
                        { farwallText( currentWord ) }
                    </p>
                </section>

            }
    } )()


    const languagesList = languages.map( ( lang, index ) => {
        const isdead = index < wrongGuessCount
        const isAlive = index >= wrongGuessCount

        const className = clsx( 'chip',
            isdead && 'lost'

        )
        return (
            <span
                key={ index }
                className={ className }
                style={ { backgroundColor: lang.background, color: lang.color } }
            >
                { lang.name }
            </span>
        )
    }

    )

    const letterElements = currentWord.split( '' ).map( ( letter, index ) => {

        const shouldRevelLatter = isgameLost || guessedWords.includes( letter )
        const className = clsx( isgameLost && !guessedWords.includes( letter ) && 'missed-letter' )
        return (
            <span key={ index } className={ className }>
                { shouldRevelLatter ? letter.toUpperCase() : '' }
            </span>
        )
    } )

    const keyboardElements = alphabet.split( '' ).map( ( letter, index ) => {

        const isGuessed = guessedWords.includes( letter )
        const isCorrect = isGuessed && currentWord.includes( letter )
        const isWrong = isGuessed && !currentWord.includes( letter )
        const className = clsx( {

            'correct': isCorrect,
            'wrong': isWrong,
        } )


        return (
            <button
                key={ index }

                className={ className }
                disabled={ isGameOver }
                onClick={ () => addGuessedWord( letter ) }
            >
                { letter.toUpperCase() }
            </button>
        )
    } )

    return (
        <>


            { gamestatusElement }


            <section className="chips-list">
                { languagesList }
            </section>

            <section className="word">

                { letterElements }

            </section>

            <section className="keyboard">
                { keyboardElements }
            </section>

            { isGameOver && <button className="new-game" onClick={ () => resetGame() }>
                New Game
            </button> }

        </>
    );
}   