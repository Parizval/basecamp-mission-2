import React from "react";
import CodeSnippet from "./CodeSnippet";

const SolidityContent: React.FC = () => {
  return (
    <>
      {/* Part 1 */}
      <div className="flex justify-center top">
        <p className="text-lg text-left max-w-2xl">
          You have arrived at The Graph Builders Academy, adventure awaits you in the skies above! In order to travel to
          the outer limits of the galaxy you will first need to enlist the Academy and prove your worth with a basic
          deployment of a subgraph. In this first mission you will, edit a basic smart contract, create a basic
          AssemblyScript handler to process event data and then publish that subgraph to your local machine as well as
          the Subgraph Studio. Once you have completed this mission you will be able to move on to the next mission and
          travel to the stars!
        </p>
      </div>
      <div className="flex justify-center top">
        <h3 className="text-2xl pt-4 text-left max-w-2xl">Environment Setup</h3>
      </div>
      <div className="flex justify-center top">
        <p className="text-lg text-left italic">Before you begin, make sure you are in the proper branch.</p>
      </div>
      <CodeSnippet code="git checkout mission-1-enlist" button={true} />
      <div className="flex justify-center top">
        <p className="text-lg text-left italic">Then be sure to install the dependencies.</p>
      </div>
      <CodeSnippet code="yarn install" button={true} />
      <div className="flex justify-center top">
        <p className="text-lg text-left italic">Start your local blockchain.</p>
      </div>
      <CodeSnippet code="yarn chain" button={true} />
      <div className="flex justify-center top">
        <p className="text-lg text-left italic">Then start your frontend, in a new terminal.</p>
      </div>
      <CodeSnippet code="yarn start" button={true} />
      <div className="flex justify-center top">
        <h3 className="text-2xl pt-4 text-left max-w-2xl">Mission Steps:</h3>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">The starting smart contract code for this mission is as follows:</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-6xl flex justify-center">
          <pre>
            <code className="language-solidity">
              {`contract Enlist {

    mapping(address => bool) public isEnlisted;

    function enlist() public {
        require(!isEnlisted[msg.sender], "You are already enlisted");
        isEnlisted[msg.sender] = true;
    }

}`}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          This basic contract allows a wallet to enlist themselves. You can check the current enlistment of a wallet by
          using the "Debug Contracts" tab in the header and checking the{" "}
          <span className="highlight-code">isEnlisted</span> mappings value for your wallet address. You can also call
          the <span className="highlight-code">enlist()</span> function on that page as well.
        </p>
      </div>
      <h1 className="flex justify-center text-2xl font-bold">
        {" "}
        📝 Task 1: Add an event to track addresses which have enlisted 📝
      </h1>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg font-bold max-w-2xl mb-4">To complete this task, follow these steps:</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <ul className="list-disc list-inside mb-4">
          <li>
            Navigate to <span className="highlight-code">packages/hardhat/contracts</span> and open the file{" "}
            <span className="highlight-code">Enlist.sol</span>
          </li>
          <li>
            Add an event called <span className="highlight-code">Enlisted</span> that will emit an{" "}
            <span className="highlight-code">address</span>
          </li>
          <li>
            Use the event by calling the <span className="highlight-code">emit</span> keyword inside the
            <span className="highlight-code">enlist()</span> function
          </li>
        </ul>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <ul>
          <li>
            <a target="_blank" href="https://solidity-by-example.org/events/">
              {" "}
              👉🏼 Look at this page if you get lost... Solidity-by-Example (Events) 🔎
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Deploy your changes...</p>
      </div>
      <CodeSnippet code="yarn deploy --reset" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">✅ Success will look like this: 👇🏼</p>
      </div>

      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-6xl flex justify-center">
          <pre>
            <code className="language-solidity">
              {`deployed at 0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6 with 283218 gas`}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top">
        <p className="text-lg text-left max-w-2xl">
          Since this will be a new contract that is deployed, you will need to enlist on the main page or using "Debug
          Contracts" tab. If you you were successful with these steps, go back to the top of the page and continue with
          the next part of the mission.
        </p>
      </div>
    </>
  );
};

export default SolidityContent;
