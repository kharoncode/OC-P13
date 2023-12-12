function Account({ data }) {
   const amount = new Intl.NumberFormat(['ban', 'id']).format(data.amount);
   return (
      <section className="account">
         <div className="account-content-wrapper">
            <h3 className="account-title">{data.title}</h3>
            <p className="account-amount">${amount}</p>
            <p className="account-amount-description">{data.description}</p>
         </div>
         <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
         </div>
      </section>
   );
}

export default Account;
