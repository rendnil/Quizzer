//action creator for selecting answers in questions
export const selectAnswer = (answer) => {
    return {type:"SELECT_ANSWER", payload: answer}
}
