// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    int public value;

    function increment() public {
        value += 1;
    }

    function decrement() public {
        value -= 1;
    }

    function getValue() public view returns (int) {
        return value;
    }
}
