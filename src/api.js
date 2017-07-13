import $ from 'jquery';

export function autoCompleteTerms() {
    const urlSearch = "https://rxnav.nlm.nih.gov/REST/displaynames"
    return $.ajax({
        url: urlSearch,
        type: "GET"
    })
}

export function drugFragmentSearch(drugNameFragment) {
    const urlSearch = "https://rxnav.nlm.nih.gov/REST/spellingsuggestions.json?name=" + drugNameFragment
    return $.ajax({
        url: urlSearch,
        type: "GET"
    })
}