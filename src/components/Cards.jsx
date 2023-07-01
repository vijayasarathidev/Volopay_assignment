import React, { useState, useEffect } from "react";
import "./New.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Your");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const data = {
      "data": [
        {
          "id": 1,
          "name": "Mixmax",
          "budget_name": "Software subscription",
          "owner_id": 1,
          "spent": {
            "value": 100,
            "currency": "SGD"
          },
          "available_to_spend": {
            "value": 1000,
            "currency": "SGD"
          },
          "card_type": "burner",
          "expiry": "9 Feb",
          "limit": 100,
          "status": "active"
        },
        {
          "id": 2,
          "name": "Quickbooks",
          "budget_name": "Software subscription",
          "owner_id": 2,
          "spent": {
            "value": 50,
            "currency": "SGD"
          },
          "available_to_spend": {
            "value": 250,
            "currency": "SGD"
          },
          "card_type": "subscription",
          "limit": 10,
          "status": "active"
        },
        {
          "id": 3,
          "name": "Adobe Creative Cloud",
          "budget_name": "Software subscription",
          "owner_id": 1,
          "spent": {
            "value": 200,
            "currency": "SGD"
          },
          "available_to_spend": {
            "value": 800,
            "currency": "SGD"
          },
          "card_type": "burner",
          "expiry": "15 Mar",
          "limit": 300,
          "status": "active"
        },
        {
          "id": 4,
          "name": "Slack",
          "budget_name": "Software subscription",
          "owner_id": 3,
          "spent": {
            "value": 80,
            "currency": "SGD"
          },
          "available_to_spend": {
            "value": 120,
            "currency": "SGD"
          },
          "card_type": "subscription",
          "limit": 50,
          "status": "active"
        },
        {
          "id": 5,
          "name": "Google Workspace",
          "budget_name": "Software subscription",
          "owner_id": 1,
          "spent": {
            "value": 150,
            "currency": "SGD"
          },
          "available_to_spend": {
            "value": 850,
            "currency": "SGD"
          },
          "card_type": "burner",
          "expiry": "12 Apr",
          "limit": 200,
          "status": "active"
        },
        {
          "id": 6,
          "name": "Zoom",
          "budget_name": "Software subscription",
          "owner_id": 2,
          "spent": {
            "value": 30,
            "currency": "SGD"
          },
          "available_to_spend": {
            "value": 220,
            "currency": "SGD"
          },
          "card_type": "subscription",
          "limit": 40,
          "status": "active"
        },
        {
          "id": 7,
          "name": "Trello",
          "budget_name": "Software subscription",
          "owner_id": 3,
          "spent": {
            "value": 60,
            "currency": "SGD"
          },
          "available_to_spend": {
            "value": 140,
            "currency": "SGD"
          },
          "card_type": "burner",
          "expiry": "18 May",
          "limit": 70,
          "status": "active"
        },
        {
          "id": 8,
          "name": "Asana",
          "budget_name": "Software subscription",
          "owner_id": 1,
          "spent": {
            "value": 120,
            "currency": "SGD"
          },
          "available_to_spend": {
            "value": 880,
            "currency": "SGD"
          },
          "card_type": "subscription",
          "limit": 80,
          "status": "active"
        }
        // Other card objects...
      ]
    };

    setCards(data.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    const filterCards = () => {
      if (activeTab === "Your") {
        setFilteredCards(cards.filter((card) => [1].includes(card.owner_id)));
      } else if (activeTab === "All") {
        setFilteredCards(cards.filter((card) => [1, 2, 3].includes(card.owner_id)));
      } else if (activeTab === "Blocked") {
        setFilteredCards(cards.filter((card) => card.status === "blocked"));
      }
    };

    filterCards();
  }, [activeTab, cards]);

  useEffect(() => {
    const searchCards = () => {
      const filtered = cards.filter(
        (card) =>
          card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          card.id.toString().includes(searchQuery)
      );
      setFilteredCards(filtered);
    };

    searchCards();
  }, [searchQuery, cards]);

  return (
    <div className="cards-container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "Your" ? "active" : ""}`}
          onClick={() => setActiveTab("Your")}
        >
          Your
        </button>
        <button
          className={`tab ${activeTab === "All" ? "active" : ""}`}
          onClick={() => setActiveTab("All")}
        >
          All
        </button>
        <button
          className={`tab ${activeTab === "Blocked" ? "active" : ""}`}
          onClick={() => setActiveTab("Blocked")}
        >
          Blocked
        </button>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by ID or name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="card-list">
          {filteredCards.map((card) => (
            <div className="card" key={card.name}>
              <div className="card-header">
                {/* <span>
                  {card.card_type === "burner"
                  ? (
                    <i className="fas fa-fire"></i> // Add fire icon for burner and subscription cards
                  ) : null}
                </span> */}

                <span className={`card-type ${card.card_type}`}></span>
                {card.card_type}
                
              </div>

<div className="card-content">
  <h3>{card.budget_name}</h3>
  <h4>{card.name}</h4>
  <div className="info-row">
    <span>
      Amount: {card.spent.value} {card.spent.currency}
    </span>
    <span>
      Frequency: {card.frequency}
    </span>
    {card.card_type === "burner" && (
      <span>
        Expiry: {card.expiry}
      </span>
    )}
  </div>
  <div className="info-row">
  <div className="dots-container">
    <div className="dot spent"></div>
  </div>
  <div className="dot-txt1">Spent</div>
</div>
<div className="info-row">
  <div className="dots-container">
    <div className="dot available"></div>
  </div>
  <div className="dot-txt2">Available to spend</div>
</div>

  <div className="ratio-line">
    <div
      className="ratio-line-progress"
      style={{
        width: `${(card.spent.value / card.available_to_spend.value) * 100}%`,
      }}
    ></div>
  </div>
  <p>
    Status: {card.status}
  </p>
</div>



            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
