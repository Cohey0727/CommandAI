import fs from "fs";
import path from "path";

const pagesDir = "src/pages";
const exportPath = "src/routes.ts";

const pagesDirectory = path.join(__dirname, pagesDir);
const routesFilePath = path.join(__dirname, exportPath);

function generateRoutes(
  directory: string,
  basePath: string = ""
): [string[], string[]] {
  let imports: string[] = [];
  let routes: string[] = [];
  const items = fs
    .readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => {
      // まずはファイルのみを読み込むため
      if (a.isDirectory() && b.isFile()) return 1;
      if (a.isFile() && b.isDirectory()) return -1;
      return 0;
    });

  for (const item of items) {
    const fullPath = path.join(directory, item.name);
    if (item.isDirectory()) {
      // Handle dynamic routes for paths like users/[userId]
      const dirName = item.name.replace(/^\[(.+)\]$/, ":$1");
      const nestedRoutes = generateRoutes(fullPath, `${basePath}/${dirName}`);
      imports = imports.concat(nestedRoutes[0]);
      routes = routes.concat(nestedRoutes[1]);
    } else if (
      item.isFile() &&
      (item.name.endsWith("index.ts") || item.name.endsWith("index.tsx"))
    ) {
      // Exclude non-page files or special scripts if needed
      const routePath = basePath === "" ? "/" : basePath;

      const importPath = fullPath
        .replace(`${__dirname}/`, "")
        .replace(/\\/g, "/")
        .replace("/index.tsx", "");

      const routeName = snakeToCamel(
        routePath === "/"
          ? "index"
          : routePath.substring(1).replace(/\//g, "_").replace(":", "")
      );
      imports.push(`import ${routeName} from '${importPath}';`);
      routes.push(`  { path: '${routePath}', component: ${routeName} },`);
    }
  }
  return [imports, routes] as const;
}

function snakeToCamel(str: string) {
  return str.replace(/(_\w)/g, (m) => m[1].toUpperCase());
}

function buildRoutesFile(imports: string[], routes: string[]): void {
  const importsString = imports.join("\n");
  const routesString = routes.join("\n");
  const content = `import { Route } from "src/utils/router";\n${importsString}\n\nconst routes: Route[] = [\n${routesString}\n];\n \n\nexport default routes;`;
  fs.writeFileSync(routesFilePath, content);
}

// Generate routes
const [imports, routes] = generateRoutes(pagesDirectory);
buildRoutesFile(imports, routes);
console.log("Routes generated successfully.");
