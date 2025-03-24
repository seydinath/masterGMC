function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // Élément à insérer
        let j = i - 1;

        // Déplacer les éléments du tableau qui sont plus grands que "key"
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insérer l'élément "key" dans sa position correcte
        arr[j + 1] = key;
    }
    return arr;
}