exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

    m.push(false);

    m.writeVar("identity");

    m.push(false);

    m.writeVar("a");

    m.readVar("identity");

    m.readVar("a");

    m.functionCall(1, 1);

    m.readVar("x");

    m.writeVar("z");

    m.endExecution();

}

