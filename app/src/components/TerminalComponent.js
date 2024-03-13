import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import { FitAddon } from 'xterm-addon-fit';
import Draggable from 'react-draggable';
import './TerminalComponent.css';

function TerminalComponent({ setShowProjects, setShowContact, setShowAbout}) {
  const terminalRef = useRef(null);
  const dir = useRef('');
  const [isVisible, setIsVisible] = useState(false);
  const [terminal, setTerminal] = useState(null);

  useEffect(() => {
    if (isVisible) {
      initTerminal();
    } else {
      terminal?.dispose();
    }
    return () => terminal?.dispose();
  }, [isVisible]);

  const initTerminal = () => {
    const newTerm = new Terminal({
      cursorBlink: true,
      windowsMode: true,
      scrollback: 1000,
    });

    const fitAddon = new FitAddon();
    newTerm.loadAddon(fitAddon);
    newTerm.open(terminalRef.current);
    fitAddon.fit();

    newTerm.writeln("Type 'help' for instructions on how to use this terminal.");

    setUpTerminalListeners(newTerm);
    setTerminal(newTerm);

    newTerm.focus();
  }

  const setUpTerminalListeners = (term) => {
    term.write(`~${dir.current}$ `);
    let commandBuffer = '';

    term.onData(data => {
      if (data === '\u000c') { // Ctrl+L
        term.clear();
        return;
      }

      if (data === '\r') { // Enter key
        term.write('\r\n');
        processCommand(commandBuffer.trim(), term);
        commandBuffer = '';
        term.write(`~${dir.current}$ `);
      } else if (data === '\u007F') { // Backspace
        if (commandBuffer.length > 0) {
          term.write('\b \b');
          commandBuffer = commandBuffer.substr(0, commandBuffer.length - 1);
        }
      } else {
        term.write(data);
        commandBuffer += data;
      }
    });
  }

  function processCommand(command, term) {
    const parts = command.split(' ');
    switch (parts[0]) {
      case 'ls':
        if (dir.current === '') {
          term.writeln('Projects  Contact  About');
        }
        break;
      case 'cd':
        if (parts.length > 1 && parts[1] === 'Projects' && dir.current === '') {
          dir.current = '/Projects';
          setShowProjects(true);
          setShowContact(false);
          setShowAbout(false);
        } else if (parts.length > 1 && parts[1] === 'Contact' && dir.current === '') {
          dir.current = '/Contact';
          setShowProjects(false);
          setShowContact(true);
          setShowAbout(false);
        } else if (parts.length > 1 && parts[1] === 'About' && dir.current === '') {
          dir.current = '/About';
          setShowProjects(false);
          setShowContact(false);
          setShowAbout(true);
        } else if (parts.length > 1 && parts[1] !== '..') {
          term.writeln(`cd: ${parts[1]}: No such file or directory`);
        } else {
          dir.current = '';
          setShowProjects(false);
          setShowContact(false);
          setShowAbout(false);
        }
        break;
      case 'clear':
        term.clear();
        break;
      case 'help':
        // Help command
        term.writeln("List of available commands:");
        term.writeln("\t'ls' - list available sections.");
        term.writeln("\t'cd <section>' - navigate to a section");
        term.writeln("\t'clear' - clear the terminal");
        term.writeln("\t'help' - display this message");
        break;
      default:
        term.writeln(`${command}: command not found`);
        break;
    }
  }

  const handleOpenClick = () => {
    setIsVisible(true);
  };


  return (
    <>
      {isVisible && (
        <Draggable>
          <div ref={terminalRef} className="terminal-window">
            <button className="close-button" onClick={() => setIsVisible(false)}>x</button>
            {/* Terminal content is rendered inside this div */}
          </div>
        </Draggable>
      )}
      {!isVisible && (
        <button className="open-button" onClick={handleOpenClick}>
          <img src="xterm.jpeg" alt="Open Terminal" />
        </button>
      )}
    </>
  );
}

export default TerminalComponent;
