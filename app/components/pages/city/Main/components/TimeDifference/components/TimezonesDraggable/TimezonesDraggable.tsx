import type { LinksFunction } from "@remix-run/node";
import type { FC } from "react";
import styles from "./TimezonesDraggable.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const TimezonesDraggable: FC = () => {
  return (
    <div className="timezones-draggable">
      <div className="timezones-draggable__box">
        <div className="timezones-draggable__numbers-top">
          <span>0</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
          <span>14</span>
          <span>15</span>
          <span>16</span>
          <span>17</span>
          <span>18</span>
          <span>19</span>
          <span>20</span>
          <span>21</span>
          <span>22</span>
          <span>23</span>
        </div>
        <div className="timezones-draggable__inner-box">
          <p>Cairo</p>
          {/* <p className="timezones-draggable__time">12:00 PM</p> */}
        </div>
      </div>
      <div className="timezones-draggable__box">
        <div className="timezones-draggable__inner-box">
          <p>Cairo</p>
          {/* <p className="timezones-draggable__time">12:00 PM</p> */}
        </div>
      </div>
    </div>
  );
};
