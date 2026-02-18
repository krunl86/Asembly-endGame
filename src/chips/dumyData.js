export function farwallText ( language ) {
    const ripLines = [
        `${ language } Write once, feel native everywhere.`,
        `${ language } makes beautiful apps faster.`,
        `Build stunning UI at lightning speed with ${ language }.`,
        `${ language } — where performance meets productivity.`,
        `From idea to app, ${ language } does it better.`,
        `${ language } powers apps users love.`,
        `Code less, create more with ${ language }.`,
        `${ language } turns designs into reality.`,
        `Fast development.Smooth performance.${ language }.`,
        `Trust ${ language } to ship quality, faster.`
    ];
    return ripLines[ Math.floor( Math.random() * ripLines.length ) ]
}

export function nextWord () {
    const wordsList = [
        "algorithm", "array", "async", "await", "backend", "binary", "boolean", "browser",
        "bug", "cache", "callback", "class", "client", "closure", "cloud", "compiler",
        "component", "constant", "context", "cookie", "database", "debug", "deploy",
        "dependency", "design", "developer", "directive", "document", "dom", "encryption",
        "endpoint", "event", "exception", "expression", "feature", "fetch", "framework",
        "frontend", "function", "gateway", "hook", "html", "http", "https", "index",
        "instance", "interface", "iteration", "javascript", "json", "library", "lifecycle",
        "logic", "loop", "middleware", "module", "network", "node", "object", "operator",
        "optimization", "package", "parameter", "performance", "promise", "protocol",
        "query", "react", "render", "request", "response", "router", "runtime", "script",
        "server", "service", "state", "storage", "string", "syntax", "thread", "token",
        "typescript", "ui", "validation", "variable", "version", "virtual", "webpack"
    ];

    return wordsList[ Math.floor( Math.random() * wordsList.length ) ]
}