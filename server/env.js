import snake from 'just-snake-case';

const {env} = process;
const up = (a) => a.toUpperCase();

export default function parse(name) {
    const small = `cloudcmd_${snake(name)}`;
    const big = up(small);
    
    return env[big] || env[small];
}

parse.bool = (name) => {
    const value = parse(name);
    
    if (value === 'true')
        return true;
    
    if (value === 'false')
        return false;
};

