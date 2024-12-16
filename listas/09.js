function fixPackages(packages) {

    // Mientras haya paréntesis en el string
    while (packages.includes('(')) {
        const open = packages.lastIndexOf('(');

        const close = packages.indexOf(')', open);


        const content = packages.slice(open + 1, close);


        const reversed = content.split('').reverse().join('');


        packages = packages.slice(0, open) + reversed + packages.slice(close + 1);
    }

    return packages;
}


fixPackages('a(cb)de');
// ➞ "abcde"
// Voltea "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h');
// ➞ "agdefcbh"
// 1º voltea "def" a "fed", y luego volteamos "bcfedg" a  "gdefcb"
