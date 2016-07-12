var Resource = require('./models/resources');

module.exports = function(app) {

    app.get('/api/resources', function(req, res) {
        Resource.find(function(err, resources) {
            if (err)
                res.send(err);
            res.json(resources);
        });
    })
    .post('/api/resources', function(req, res) {
        var resource = new Resource();
        resource.name = req.body.name;
        resource.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Resource created!' });
        });               
    })
    .route('/api/resources/:resource_id')
        .get(function(req, res) {
            Resource.findById(req.params.resource_id, function(err, resource) {
                if (err)
                    res.send(err);
                res.json(resource);
            });
        })
        
        .delete(function(req, res) {
            Resource.remove({_id: req.params.resource_id}, function(err, resource) {
                if (err)
                    res.send(err);
                res.json({ message: 'Successfully deleted' });
            });
        });

};