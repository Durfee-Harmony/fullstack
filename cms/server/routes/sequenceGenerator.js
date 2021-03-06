var Sequence = require('../models/sequence');

var maxDocumentId;
var maxMessageId;
var maxid;
var sequenceId = null;

function SequenceGenerator() {

  Sequence.findOne()
    .exec(function (err, sequence) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }

      sequenceId = sequence._id;
      maxDocumentId = sequence.maxDocumentId;
      maxMessageId = sequence.maxMessageId;
      maxid = sequence.maxid;
    });
}

SequenceGenerator.prototype.nextId = function (collectionType) {

  var updateObject = {};
  var nextId;

  switch (collectionType) {
    case "documents":
      maxDocumentId++;
      updateObject = {
        maxDocumentId: maxDocumentId
      };
      nextId = maxDocumentId;
      break;
    case "messages":
      maxMessageId++;
      updateObject = {
        maxMessageId: maxMessageId
      };
      nextId = maxMessageId;
      break;
    case "contacts":
      maxid++;
      updateObject = {
        maxid: maxid
      };
      nextId = maxid;
      break;
    default:
      return -1;
  }

  Sequence.update({
      _id: sequenceId
    }, {
      $set: updateObject
    },
    function (err) {
      if (err) {
        console.log("nextId error = " + err);
        return null
      }
    });

  return nextId;
}

module.exports = new SequenceGenerator();