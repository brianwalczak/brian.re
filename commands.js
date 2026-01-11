/*
Welcome stranger. You've stumbled upon the commands.js file. This file contains all the commands that can be run in the terminal emulator.

The commands are defined in the handleEvent() function, which checks if the command is valid or not and contains the logic for each command.
Next, the isExecutable() function will check if the command is an executable file or not. If it is, it will return the filename without the .sh extension.
Lastly, the handleFile() function will handle the execution of the file. It will check which file is being executed and run the appropriate output :)
*/

window.acceptableFiles = [
    {
        "name": 'About Me',
        "file": 'about.sh',
        "text": "Hey there! I'm Brian, a high school student and full-stack developer with a strong focus on back-end development. I'm proficient in Node.js and have a solid understanding of Python. I love tinkering with electronics, especially Arduino.<br><br>I've been programming for over 5 years, and I'm always looking for cool new projects to build!<br><br>You can check out my <a style='color: inherit;' target='_blank' rel='noopener noreferrer' href='https://github.com/BrianWalczak'>GitHub Profile</a> to view some of my projects."
    },
    {
        "name": 'My Skills',
        "file": 'skills.sh',
        "text": "Hey there, I see you're interested in my skills... here are a few:<br>- Node.js<br>- Python<br>- HTML, CSS, and JS<br>- Discord.js (check out my bots!)<br>- Arduino/C++<br>- Roblox Studio<br><br>Some software I'm proficient in includes Visual Studio Code, KiCad 8.0, Blender, Adobe Illustrator, Adobe Photoshop, and Adobe Premiere Pro."
    },
    {
        "name": 'Contact Me',
        "file": 'contact.sh',
        "text": "Hey there! Thanks for your interest in contacting me.<br><br>For business inquiries, including questions about my work, you can contact me via email at me@brian.re and I'll respond as soon as I can.<br><br>For any other inquiries, feel free to reach out to me on Discord at @briannw.<br><br><br><a style='color: inherit;' target='_blank' rel='noopener noreferrer' href='mailto:me@brian.re'>Send Me an Email</a> | <a style='color: inherit;' target='_blank' rel='noopener noreferrer' href='https://discord.com/users/603517534720753686'>Open Discord</a>"
    },
    {
        "name": 'Tip Me',
        "file": 'tip.sh',
        "text": "If you've found my projects helpful or just want to support a solo developer, I'd appreciate if you could leave a tip!<br><br>You can leave a tip through Ko-Fi by using <a style='color: inherit;' target='_blank' rel='noopener noreferrer' href='https://ko-fi.com/brianwalczak'>this link</a>. Your support helps me continue to create and maintain my projects!<br><br>Thank you for considering supporting my work! Every tip helps and is greatly appreciated. 😄"
    }
];

function isExecutable(data) {
    for (const { file: filename } of window.acceptableFiles) {
        const lowerFilename = filename.toLowerCase();
        const fileNameNoExt = lowerFilename.replace(/\.sh$/, '');

        // current filename
        const variations = [
            `./${filename}`,                  
            `./${lowerFilename}`,             
            filename,                         
            lowerFilename,                    
            `sh ./${filename}`,               
            `sh ./${lowerFilename}`,          
            `sh ${filename}`,                 
            `sh ${lowerFilename}`,            
            `bash ./${filename}`,             
            `bash ./${lowerFilename}`,        
            `bash ${filename}`,               
            `bash ${lowerFilename}`,          
            `source ./${filename}`,           
            `source ./${lowerFilename}`,      
            `source ${filename}`,             
            `source ${lowerFilename}`,        
            `. ./${filename}`,               
            `. ./${lowerFilename}`,           
            `. ${filename}`,                  
            `. ${lowerFilename}`,
        ];

        // without the .sh extension
        variations.push(
            fileNameNoExt,
            `./${fileNameNoExt}`,
            `sh ${fileNameNoExt}`,
            `sh ./${fileNameNoExt}`,
            `bash ${fileNameNoExt}`,
            `bash ./${fileNameNoExt}`,
            `source ${fileNameNoExt}`,
            `source ./${fileNameNoExt}`,
            `. ./${fileNameNoExt}`,
        );

        // Check if the variations include the input data
        if (variations.includes(data.toLowerCase())) {
            return fileNameNoExt; // Return the filename without .sh
        }
    }
    
    return false;
}

async function handleFile(file) {
    window.disableKeys = true;

    switch(file) {
        case 'about':
            term.newLine(2);
            term.write("Hey there. I'm Brian, a high school student and full-stack developer with a strong focus on back-end development.");
            await sleep(2000);
            term.newLine();
            term.write("I'm proficient in Node.js and have a solid understanding of Python.");
            await sleep(2000);
            term.newLine();
            term.write("I love tinkering with electronics, especially Arduino.");
            await sleep(2000);
            term.newLine();
            term.write("I've been programming for over 5 years, and I'm always looking for cool new projects to build!");
            await sleep(2000);
            term.newLine();
            term.write("You can check out my \x1b]8;;https://github.com/BrianWalczak\x1b\\GitHub Profile\x1b]8;;\x1b\\ to view some of my projects.");
            term.newLine(2);
            term.write("Tip: you can run the `skills.sh` script to see more of my skills.");

            window.disableKeys = false;
            break;
        case 'skills':
            term.newLine(2);
            term.write("Hey there, I see you're interested in my skills.");
            await sleep(500);
            term.write(".");
            await sleep(500);
            term.write(".");
            await sleep(2000);
            term.write(' Well, here are a few:');
            await sleep(1000);
            term.newLine();
            term.write('- Node.js');
            term.newLine();
            term.write('- Python');
            term.newLine();
            term.write('- HTML, CSS, and JS');
            term.newLine();
            term.write('- Discord.js (check out my bots!)');
            term.newLine();
            term.write('- Arduino/C++');
            term.newLine();
            term.write('- Roblox Studio');
            term.newLine(2);
            await sleep(3000);
            term.write("Some software I'm proficient in includes:");
            await sleep(1000);
            term.newLine();
            term.write('- Visual Studio Code');
            term.newLine();
            term.write('- KiCad 8.0');
            term.newLine();
            term.write('- Blender');
            term.newLine();
            term.write('- Adobe Illustrator');
            term.newLine();
            term.write('- Adobe Photoshop');
            term.newLine();
            term.write('- Adobe Premiere Pro');
            await sleep(3000);
            term.newLine();
            term.write("... that's about all I can think of right now.");
            term.newLine(2);
            term.write("Tip: You can run the `contact.sh` script to reach out to me.");

            window.disableKeys = false;
            break;
        case 'contact':
            term.newLine(2);
            term.write('Hey there! Thanks for your interest in contacting me.');
            await sleep(2000);
            term.newLine();
            term.write("For business inquiries, including questions about my work, you can contact me via email at me@brian.re and I'll respond as soon as I can.");
            await sleep(1000);
            term.newLine();
            term.write("For any other inquiries, feel free to reach out to me on Discord at @briannw.");
            await sleep(1000);
            term.newLine(2);
            term.write("Tip: Interested in supporting me? Run the `tip.sh` script to learn how to leave a tip :)");

            window.disableKeys = false;
            break;
        case 'tip':
            try {
                const width = 800;
                const height = 600;

                const left = window.screen.width - width;
                const top = 0;

                term.newLine(2);
                term.write('If you\'ve found my projects helpful or just want to support a solo developer, you can leave me a tip on the window that just opened :)');
                window.open('https://ko-fi.com/brianwalczak', '_blank', `width=${width},height=${height},top=${top},left=${left}`);
                term.newLine();
                term.write("Don't see the window? You can open the page by \x1b]8;;https://ko-fi.com/brianwalczak\x1b\\clicking here\x1b]8;;\x1b\\.");
                return;
            } catch(error) {
                console.log("We couldn't open the tip page. Reason: ", error);
                term.newLine();
                term.write("Thanks for considering leaving a tip! You can leave a tip at https://ko-fi.com/brianwalczak :)");
            }

            window.disableKeys = false;
            break;
        default:
            window.disableKeys = false;
    }
}

async function handleEvent(data) {
    data = data.trim().replace(/^\s*sudo\s+/, '');
    if(data.length === 0) return;

    const file = isExecutable(data);

    if(data == 'help') {
        term.newLine();
        term.write('These shell commands are defined internally. Type `help` to see this list.');
        term.newLine(2);
        term.write('+-----------------------------------------------------+');
        term.newLine();
        term.write('| Use sh or bash to run a shell script. The following |');
        term.newLine();
        term.write('| scripts are available:                              |');
        term.newLine();
        term.write('|                                                     |');
        term.newLine();
        term.write('| Use `about.sh` to learn more about me.              |');
        term.newLine();
        term.write('| Use `skills.sh` to see my skills.                   |');
        term.newLine();
        term.write('| Use `contact.sh` to see how to contact me.          |');
        term.newLine();
        term.write('| Use `tip.sh` to support my work.                    |');
        term.newLine();
        term.write('|                                                     |');
        term.newLine();
        term.write('| Use `brian-config` to configure your experience.    |');
        term.newLine();
        term.write('+-----------------------------------------------------+');
        term.newLine(2);
        term.write('Type `ls` to list all available files to run with sh (or bash).');

        return;
    }

    if(data == 'sudo') {
        term.newLine();
        term.write(`usage: sudo -h | -K | -k | -V`);
        term.newLine();
        term.write(`usage: sudo -v [-ABkNnS] [-g group] [-h host] [-p prompt] [-u user]`);
        term.newLine();
        term.write(`usage: sudo -l [-ABkNnS] [-g group] [-h host] [-p prompt] [-U user] [-u user] [command [arg ...]]`);
        term.newLine();
        term.write(`usage: sudo [-ABbEHkNnPS] [-r role] [-t type] [-C num] [-D directory] [-g group] [-h host] [-p prompt] [-R directory] [-T timeout] [-u user] [VAR=value]`);
        term.newLine();
        term.write(`            [-i | -s] [command [arg ...]]`);
        term.newLine();
        term.write(`usage: sudo -e [-ABkNnS] [-r role] [-t type] [-C num] [-D directory] [-g group] [-h host] [-p prompt] [-R directory] [-T timeout] [-u user] file ...`);
        return;
    }

    if(data == '.') {
        term.newLine();
        term.write('bash: .: filename argument required');
        term.newLine();
        term.write('.: usage: . filename [arguments]');
        return;
    }

    if(data == 'bash' || data == 'sh' || data == 'cd') return;

    if(data == 'source') {
        term.newLine();
        term.write('bash: source: filename argument required');
        term.newLine();
        term.write('source: usage: source filename [arguments]');
        return;
    }

    if(data == 'su') {
        window.activeUser = 'root@localhost';
        return;
    }

    if(data == 'ls') {
        const files = window.acceptableFiles.map(item => item.file).join('  ');

        term.newLine();
        term.write('\x1b[32m' + files + '\x1b[0m\r\n');
        return;
    }

    if(data == 'clear') {
        term.clear();
        return;
    }

    if(data == 'brian-config') {
        $('#whiptail').css('display', 'flex');
        return brianConfig('start');
    }

    if(file) {
        await handleFile(file);
        return;
    }

    term.newLine();
    term.write(data.split(' ')[0] + ': command not found');
}

// This will override the xterm hyperlink behavior (by default it warns the user of dangerous links, but it looks shady)
window.confirm = (function (originalConfirm) {
    return function (message) {
        if (message.includes("WARNING: This link could potentially be dangerous")) {
            return true;
        }
        return originalConfirm(message);
    };
})(window.confirm);

/* Copyright 2025 - Brian Walczak */
