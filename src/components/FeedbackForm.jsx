import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

function FeedbackForm() {
    const [feedback, setFeedback] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (feedback.trim()) {
            setIsSubmitted(true);
        }
    };

    function handleCloseModal() {
        setIsSubmitted(false);
        setFeedback("");
    };

    function handleFeedbackChange (event) {
        setFeedback(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="feedback">Feedback:</label>
                <textarea
                    id="feedback"
                    value={feedback}
                    onChange={handleFeedbackChange}
                    placeholder="Enter your feedback"
                />
                <Button type="submit">Submit</Button>
            </form>

            {isSubmitted && (
                <Modal onClose={handleCloseModal}>
                    <p>Thank you for your feedback!</p>
                    <Button onClick={handleCloseModal}>Close</Button>
                </Modal>
            )}
        </div>
    );
};

export default FeedbackForm;
