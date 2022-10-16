/* eslint-disable jsx-a11y/anchor-is-valid */
import type { LinksFunction } from "@remix-run/node";
import type { FC } from "react";
import styles from "./Clock.css";

export type ClockProps = {
  className?: string;
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Clock: FC<ClockProps> = ({ className }) => {
  return (
    <div className={`clock ${className ?? ""}`}>
      <div className="a">
        <div className="b">
          <div className="c">
            <div className="d">
              <div className="sh">
                <div className="hh">
                  <div className="h"></div>
                </div>
                <div className="mm">
                  <div className="m"></div>
                  <div className="mr"></div>
                </div>
                <div className="ss">
                  <div className="s"></div>
                </div>
              </div>
              <div className="ii">
                <b>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </b>
                <b>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </b>
                <b>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </b>
                <b>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </b>
                <b>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </b>
                <b>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </b>
              </div>
              <div className="e">
                <div className="f">
                  <u>
                    12
                    <u>
                      1
                      <u>
                        2<u>3</u>4
                      </u>
                      5
                    </u>
                  </u>
                </div>
                <div className="g">
                  <u>
                    <u>
                      11
                      <u>
                        10<u>9</u>8
                      </u>
                      7
                    </u>
                    6
                  </u>
                </div>
                <div className="q">
                  <a
                    href="#"
                    style={{
                      position: "relative",
                      zIndex: "1000",
                      color: "#222",
                      textDecoration: "none",
                    }}
                  >
                    quartz
                  </a>
                </div>
              </div>
              <div className="hh">
                <div className="h"></div>
              </div>
              <div className="mm">
                <div className="m"></div>
                <div className="mr"></div>
              </div>
              <div className="ss">
                <div className="s"></div>
                <div className="sr"></div>
              </div>
              <div className="k"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
