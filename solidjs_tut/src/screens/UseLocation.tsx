import { useLocation } from "@solidjs/router";

export function UseLocation() {
  // useLocation returns a reactive store describing the current URL.
  // It updates automatically whenever the route changes.
  const location = useLocation();

  return (
    <>
      <h1>useLocation</h1>
      <p>
        <code>useLocation()</code> returns a reactive object with the current URL
        broken into its parts. All properties update reactively when the route changes.
      </p>

      <table style={{ "border-collapse": "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ "text-align": "left", padding: "0.4rem 1rem 0.4rem 0", color: "#999" }}>
              Property
            </th>
            <th style={{ "text-align": "left", padding: "0.4rem 0", color: "#999" }}>
              Current value
            </th>
          </tr>
        </thead>
        <tbody>
          {(
            [
              ["pathname", location.pathname],
              ["search", location.search || "(empty)"],
              ["hash", location.hash || "(empty)"],
              ["state", JSON.stringify(location.state) ?? "(none)"],
              ["key", location.key],
            ] as [string, string][]
          ).map(([prop, val]) => (
            <tr>
              <td style={{ padding: "0.3rem 1rem 0.3rem 0" }}>
                <code>{prop}</code>
              </td>
              <td style={{ padding: "0.3rem 0", "font-family": "monospace" }}>{val}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ color: "#999", "font-size": "0.88rem", "margin-top": "1rem" }}>
        Navigate to <code>/use-location?foo=bar#section</code> in the address bar to
        see <code>search</code> and <code>hash</code> populated.
      </p>
    </>
  );
}
