pragma solidity ^0.4.23;

import "../installed_contracts/zeppelin/contracts/ownership/Ownable.sol";
import "../installed_contracts/zeppelin/contracts/lifecycle/Pausable.sol";

contract HelloWorld is Ownable, Pausable {

	string public str = "Hello, World!";

	function updateString(string memory _str) onlyOwner whenNotPaused public returns (bool)  {
		str = _str;
		return true;
	}
}
