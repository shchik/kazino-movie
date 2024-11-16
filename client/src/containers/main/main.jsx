import searchImage from "./images/icons/search-icon.png";
import "./main.css";
import React from "react";
import RenderMainGrid from "../../components/mainGridComponent/renderMainGrid";
import RenderGenreList from "../../components/genreListComponent/genreListComponent";

function Main({
  slots,
  setSlots,
  genres,
  onChangeSearchValue,
  selectedGenre,
  handleLabelClick,
  isAuth,
  onLoginClick,
}) {
  return (
    <div className="main-flexbox">
      <div className="sidebar">
        <div className="search-bar">
          <img src={searchImage}></img>
          <input
            placeholder="Провайдеры поискdа"
            onChange={(e) => onChangeSearchValue(e.target.value)}
          ></input>
        </div>
        <ul className="genre-list">
          <RenderGenreList
            genres={genres}
            slots={slots}
            selectedGenre={selectedGenre}
            handleLabelClick={handleLabelClick}
          />
        </ul>
      </div>

      <div className="main-grid-layout js-main-grid-layout">
        <RenderMainGrid
          slots={slots}
          setSlots={setSlots}
          isAuth={isAuth}
          onLoginClick={onLoginClick}
        />
      </div>
    </div>
  );
}

export default Main;
