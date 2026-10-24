for (let power = 10; power <= 100; power = power + 10) {

    if (power === 30) {
        console.log("Skipping:", power);
        continue;
    }

    if (power === 70) {
        console.log("Emergency stop:", power);
        break;
    }

    console.log("Power:", power);
}

console.log("Diagnostic finished");