const cacl = (data) => {
    for (var i = 0; i < 100; i++) {
        var count = 0
        for (var i = 0; i < 6000000000; i++) {
            count += i
        }
    }

    return count + data
}

onmessage = function(e) {
    var data = e.data

    var result = cacl(data)

    this.postMessage(result)
}



